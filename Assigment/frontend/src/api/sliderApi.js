import { axiosClient} from'./axiosClient';
const SliderAPI={
    getAll(){
        const url=`slider`;
        return axiosClient.get(url);
    }
}
export default SliderAPI;