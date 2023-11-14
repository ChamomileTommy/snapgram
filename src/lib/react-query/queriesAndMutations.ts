import { useMutation } from "@tanstack/react-query";
import { INewUser } from "@/types/index";
import { createUserAccount, signInAccount } from "../appwrite/api";

// ============================================================
// AUTH QUERIES
// ============================================================

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    });
};

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: { email: string; password: string }) => signInAccount(user),
    });
};