"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function AdminForm() {
  const form = useForm();
  return (
    <Form {...form}>
      <form className="space-y-10 mt-6">
        {/* Nom du Camion */}
        <FormField
          control={form.control}
          name="nomDuCamion"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-4 sm:ml-12  lg:ml-[70px]">
                Nom du admin :
              </FormLabel>
              <FormControl className="w-full sm:w-[80%] m-auto rounded-3xl">
                <Input placeholder="Entrer le nom du camion" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Type de Transport */}
        <FormField
          control={form.control}
          name="typeDeTransport"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-4 sm:ml-12  lg:ml-[70px]">
                Prénom du admin :
              </FormLabel>
              <FormControl className="w-full sm:w-[80%] m-auto rounded-3xl">
                <Input placeholder="Entrer le type de transport" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Poids */}
        <FormField
          control={form.control}
          name="poids"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-4 sm:ml-12  lg:ml-[70px]">
                Email :
              </FormLabel>
              <FormControl className="w-full sm:w-[80%] m-auto rounded-3xl">
                <Input placeholder="Entrer le poids" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Quantité */}
        <FormField
          control={form.control}
          name="quantite"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-4 sm:ml-12  lg:ml-[70px]">
                Numéro :
              </FormLabel>
              <FormControl className="w-full sm:w-[80%] m-auto rounded-3xl">
                <Input placeholder="Entrer la quantité" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="flex justify-center items-center">
          <Button type="submit" className="px-6 py-3 text-sm sm:text-base">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
