import { MongoClient,ObjectId  } from 'mongodb'

export default class JobDAL{

    insereJob(filme){
        const url = "mongodb://localhost:27017/";
        MongoClient.connect(url)
        .then(db => {
            const dbo = db.db("myjobdb");
            dbo.collection("Job").insertOne(filme)
                .then(res => { 
                    console.log("1 document inserted!"); db.close(); 
                })
        });
    }

    async retornaJob(filter) {
        const client = await MongoClient.connect('mongodb://localhost:27017/');
        const coll = client.db('myjobdb').collection('Job');
        const cursor = coll.find(filter);
        const result = await cursor.toArray();

        await client.close();
        return result;
    }

    async deleteJobById(id) {
        if (!ObjectId.isValid(id)) {
            throw new Error('Invalid ObjectId');
        }

        const client = await MongoClient.connect('mongodb://localhost:27017/');
        const coll = client.db('myjobdb').collection('Job');

        try {
            const result = await coll.deleteOne({ _id: new ObjectId(id) });
            return result.deletedCount > 0;
        } catch (error) {
            console.error('Error deleting job:', error);
            throw error;
        } finally {
            await client.close();
        }
    }
}
