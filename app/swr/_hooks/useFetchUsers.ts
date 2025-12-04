"use client";
import axios from "axios";
import useSWR from "swr";

export type SingleUserType = {
   id: string | number;
   email: string;
   username: string;
   password: string;
   name: { firstname: string; lastname: string };
   phone: string;
};

const Usersfetcher = (url: string) => axios.get(url).then((res) => res.data);

function useFetchUsers() {
   const { data, isLoading, error } = useSWR("https://fakestoreapi.com/users", Usersfetcher);
   return { data: data as SingleUserType[], isLoading, error };
}

export default useFetchUsers;
