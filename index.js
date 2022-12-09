//Mongo CRUD
const {client} = require("./dbconfig.js");

//Insert Document
const InsertDoc = async() => {
        try {
            var myData = client.db("myself");
            var mycollect = myData.collection("info");
            var doc = {name: "Aly", age: "33", height: "5 feet 3 Inch"}
            var result = await mycollect.insertOne(doc);
            console.log(result);
            console.log(`My Info=====>,${result.insertedId}`);

        } catch (error) {
            console.log(error);
        } finally {
            await client.close();
        }
    }
    //InsertDoc();
    //Insert many Document
const InsertDocs = async() => {
        try {
            var myData = client.db("myself");
            var mycollect = myData.collection("info");
            var docs = [{
                    name: "Aleya",
                    age: "33",
                    height: "5 feet 3 Inch",
                    color: "Brown"
                },
                {
                    name: "Aly",
                    country: 'usa",'
                },
            ]
            const result = await mycollect.insertMany(docs);
            console.log(result);
            console.log(`Many Info=====>,${result.insertMany}`);

        } catch (error) {
            console.log(error);
        } finally {
            await client.close();
        }
    }
    
// InsertDocs();
//Find single Document
const FindOneDoc = async() => {
        try {
            var myData = client.db("myself");
            var mycollect = myData.collection("info");
            const query = {color: "brown"}
            var result = await mycollect.findOne(query);
            console.log(result);

        } catch (error) {
            console.log(error);
        } finally {
            await client.close();
        }
    }
    // FindOneDoc();
    //Find Many Document
const FindManyDoc = async() => {
        try {
            var myData = client.db("myself");
            var mycollect = myData.collection("info");
            const result = await mycollect.find().toArray();
            console.log(result);
        } catch (error) {
            console.log(error);
        } finally {
            await client.close();
        }
    }
    //FindManyDoc(); 
    //Update Single Document
const UpdateSingleDoc = async() => {
        try {
            var myData = client.db("myself");
            var myCollection = myData.collection("info");
            const filter = {name:"Aly"}
            const updateDoc = {$set:{name: "Aleya Aly"}};
            const result = await myCollection.updateOne(filter, updateDoc);
            console.log(result);

        } catch (error) {
            console.log(error);
        } finally {
            await client.close();
        }
    }
    // UpdateSingleDoc();
    //Update Many Document
const UpdateManyDoc = async() => {
        try {
            var myData = client.db("myself");
            var myCollection = myData.collection("info");
            const filters = {name: "Aly", country: "usa" }
            const updateDocs = {
                $set: {name: "Aleya Aly", country: "Bangladesh"}

            };
            const result = await myCollection.updateMany(filters, updateDocs);
            console.log(result);

        } catch (error) {
            console.log(error);
        } finally {
            await client.close();
        }
    }
    //UpdateManyDoc();
    //Delete Single Document
const SingleDeleteDoc = async() => {
        try {
            var MyData = client.db("myself");
            var MyCollection = MyData.collection("info");
            const query = {country:"Bangladesh"};
            const result = await MyCollection.deleteOne(query);
            console.log(result.deletedCount === 1);
        } catch (error) {
            console.log(error);
        } finally {
            await client.close();
        }
    }
    //SingleDeleteDoc();
    //Delete Many Document
const ManyDeleteDoc = async() => {
        try {
            var MyData = client.db("myself");
            var MyCollection = MyData.collection("info");
            const query = {}
            const result = await MyCollection.deleteMany(query);
            console.log("Deleted" + result.deletedCount + "document");
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    //ManyDeleteDoc();
    //Projection Document
const ProjectionDoc = async() => {
        try {
            var MyData = client.db("myself");
            var MyCollection = MyData.collection("info");
            const query = {}
            const projectionQuery = {projection: {age:"33"} }
            const result = await MyCollection.find(query, projectionQuery).toArray();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    //ProjectionDoc();
    //Find Limit Document
const FindLimitDoc = async() => {
        try{
            var MyData = client.db("myself");
            var MyCollection = MyData.collection("info");
            const result = await MyCollection.find().limit(3).toArray();
            console.log(result);
        } catch (error){
            console.log(error);
        }
    }
    //FindLimitDoc();
    //Find Sort Document
const FindSortDoc = async() => {
    try {
        var MyData = client.db("myself");
        var MyCollection = MyData.collection("info");
        const qeurySort = {age: "1"}
        const result = await MyCollection.find().sort(qeurySort).toArray();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
FindSortDoc();
