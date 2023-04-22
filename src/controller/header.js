const Header = require('../models/Header');
const header = require('../models/Header');

exports.createHeader = async (req, res) => {
    
    const {logo , titre,texte,fburl,insurl,giturl,classes,introduction} = req.body
    headerToUpdate = await Header.findOne({})
    if(headerToUpdate){
        if(logo){
            headerToUpdate.logo = logo
        }
        if(titre){
            headerToUpdate.titre = titre
        }
        if(texte){
            headerToUpdate.texte = texte
        }
        if(fburl){
            headerToUpdate.fburl=fburl
        }
        if(insurl){
            headerToUpdate.insurl=insurl
        }
        if(giturl){
            headerToUpdate.giturl = giturl
        }
        let bg =[]
        if(req.files.length>0){
        bg =req.files.map(file=>{
            return {img : file.filename}
        });
        if(bg){
            headerToUpdate.bg=bg
        }
        if(classes){
            headerToUpdate.classes=classes
        }
        if(introduction){
            headerToUpdate.introduction=introduction
        }
        headerToUpdate.save((error,header)=>{
            if(header){
                return res.status(200).json({message : "header updated sucsessfully !"})
            }
            return res.status(400).json({message : error})
        })
    }

    }
    else{
    let bg =[]
    if(req.files.length>0){
        bg =req.files.map(file=>{
            return {img : file.filename}
        });
    }
    const header = new Header({
        logo,titre,texte,fburl,insurl,giturl,bg
    })
    header.save((error,header)=>{
        if(header){
            return res.status(200).json({message : "header added sucsessfully !"})

        }
        return res.status(400).json({message : error})
    })

}};
exports.getHeader =(req, res) => {

   Header.find({}).exec((error,header)=>{
    if(header){
        return res.status(200).json({header});
    }
  

})}
