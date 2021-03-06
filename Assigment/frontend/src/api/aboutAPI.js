import { axiosClient} from'./axiosClient';
const AboutsAPI={
    getAll(){
        const url=`about`;
        return axiosClient.get(url);
    },
    get(id){
        const url=`about/${id}`;
        return axiosClient.get(url);
    },
    add(about){
        const url=`about`;
        return axiosClient.post(url,about);
    },
    remove(id){
        const url=`about/${id}`;
        return axiosClient.delete(url);
    },
    update(id,data){
        const url=`about/${id}`;
        return  axiosClient.put(url,data);
    }
}
export default AboutsAPI;