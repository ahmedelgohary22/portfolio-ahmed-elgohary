"use client";
import React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { Mail, MessageCircle, User } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const ContactForm = ({}) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    toast.success("Email sent successfully!");
  }
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={
          "flex flex-col gap-y-6 justify-start items-center lg:items-start"
        }
      >
        <div
          className={
            "min-w-[400px] md:w-full max-w-xl relative flex items-center"
          }
        >
          <Input
            type={"name"}
            id={"name"}
            name={"name"}
            placeholder={"Enter Your Name"}
          />
          <User size={20} className={"absolute right-4"} />
        </div>
        <div
          className={
            "min-w-[400px] md:w-full max-w-xl relative flex items-center"
          }
        >
          <Input
            type={"email"}
            id={"email"}
            name={"email"}
            placeholder={"Your email account"}
          />
          <Mail size={20} className={"absolute right-4"} />
        </div>
        <div
          className={
            "min-w-[400px] md:w-full max-w-xl relative flex items-center"
          }
        >
          <Textarea
            id={"message"}
            rows={5}
            name={"message"}
            placeholder={"Enter your message"}
          />
          <MessageCircle size={20} className={"absolute right-4 top-4"} />
        </div>
        <Button className={"flex items-center max-w-[166px] text-sm"}>
          Let&apos;s Talk
        </Button>
      </form>
    </Form>
    /*    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem
                className={
                  "relative flex items-center min-w-[400px] md:w-full max-w-xl"
                }
              >
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <User size={20} className={"absolute right-6"} />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>*/
  );
};

export default ContactForm;
