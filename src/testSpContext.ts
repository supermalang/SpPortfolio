import pnp from "sp-pnp-js"
import * as $ from "jquery"

pnp.setup({ sp: { headers: { "Accept": "application/json; odata=verbose" } } });

export default function testSpContext() {
    pnp.sp.web.lists.getByTitle("Boite à outils").items.get().then(r=>{ 
        r.forEach(element => {
            $("#testSP").append("<br/>Element : "+element.Title);
        });
        console.log(r);
     })
}