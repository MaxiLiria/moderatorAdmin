import { instance } from "./api";

// READ
export const getChallenges = async () => {
const data = await instance.get("/challenge");
return data.data;
} 

// READ (by ID)
export const getChallengeById = async (id) => await instance.get(`/challenge/${id}`);

// DELETE
export const deleteChallenge = async (id) => await instance.delete(`/challenge/${id}`);

