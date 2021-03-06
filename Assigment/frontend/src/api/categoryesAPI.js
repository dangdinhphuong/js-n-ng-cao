import { axiosClient} from'./axiosClient';
const CategoryesAPI={
    getAll(){
        const url=`categoryes`;
        return axiosClient.get(url);
    },
    get(id){
        const url=`categoryes/${id}`;
        return axiosClient.get(url);
    },
    add(category){
        const url=`categoryes`;
        return axiosClient.post(url,category);
    },
    remove(id){
        const url=`categoryes/${id}`;
        return axiosClient.delete(url);
    },
    update(id,data){
        const url=`categoryes/${id}`;
        return  axiosClient.put(url,data);
    }
}
export default CategoryesAPI;