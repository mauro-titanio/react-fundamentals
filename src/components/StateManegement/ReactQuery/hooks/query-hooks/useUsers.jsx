import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = () => axios.get("https://jsonplaceholder.typicode.com/users").then(response => response.data);

export default function useUsers(){
    //Arguments of useQuery (queryKey: unique argument, fetcFunction)
    return useQuery('users', fetchUsers)
}
