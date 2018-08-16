import pnp from "sp-pnp-js"
import * as $ from "jquery"

pnp.setup({ sp: { headers: { "Accept": "application/json; odata=verbose" } } });

export default function testSpContext() {
    pnp.sp.web.lists.getByTitle("Boite à outils").rootFolder.folders.get().then(f=>{
        let compteur=1;
        f.forEach(element => {
            if (element.Name!="Forms") {
                $("#testSP").append("Element : <a href='"+element.ServerRelativeUrl+"'>"+element.Name+"</a>; Items : "+element.ItemCount+"<br/><span id='ibsn_rootfolder_"+compteur+"'></span><br/>");
                
                pnp.sp.web.lists.getByTitle("Boite à outils").rootFolder.folders.getByName(element.Name).folders.get().then(f=>{
                    f.forEach(element=>{
                        $("#ibsn_rootfolder_1").append("Sous-Element : <a href='"+element.ServerRelativeUrl+"'>"+element.Name+"</a>; Items : "+element.ItemCount+"<br/>");
                    });
                });
            }
            compteur++;
        });
        console.log(f);
    });

    /*pnp.sp.web.lists.getByTitle("Boite à outils").items.get().then(r=>{ 
        r.forEach(element => {
            $("#testSP").append("<br/>Element : "+element.Title);
        });
        console.log(r);
    });*/
}