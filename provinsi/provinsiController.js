Provinsi=require('./provinsiModel.js');
module.exports.getProvinsi=function(callback,limit){
    Provinsi.find(callback).limit(limit);
}
module.exports.createProvinsi=function(provinsi,callback){
    Provinsi.create(provinsi,callback);
}
module.exports.removeProvinsi=function(_id,callback){
    Provinsi.findByIdAndRemove(_id,callback);
}
module.exports.updateProvinsi=function(_id,provinsi,callback){
    Provinsi.findByIdAndUpdate(_id,provinsi,callback);
}
module.exports.getByNamaProvinsi=function(id,callback){
    Provinsi.find({NamaProvinsi:id},callback);
}
module.exports.getProvinsiById=function(id,callback){
    Provinsi.findById(id,callback);
}
