import {action, decorate, observable} from "mobx";

export default class Store {
    businessList = [
        {id:0,name: "Salted Herring LTD", inbox: 1,apps:2,data_is_shared:true,selected:true},
        {id:1,name: "Sartoria LTD", inbox: 7,apps:3,data_is_shared:true,selected:false},
        {id:2,name: "Something Signage LTD", inbox: 2,apps:1,data_is_shared:true,selected:false},
        {id:3,name: "Lightbulb Advertising ", inbox: 4,apps:9,data_is_shared:false,selected:false},


    ];
    selectBusiness(id) {
        console.log('id',id);
        this.businessList.map((i)=>{i.selected=false});
        const selectedBusiness = this.businessList.find(x => x.id === id);
        console.log(selectedBusiness);
        // @ts-ignore
        selectedBusiness.selected=true;

    }
}
decorate(Store, {
    businessList: observable,
    selectBusiness:action
});