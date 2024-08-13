import {UseFormReturn} from "react-hook-form";
import {User} from "@/models/user";

export type UserSettingsToolbarProps = {
    methods: UseFormReturn<User, any>;
};
