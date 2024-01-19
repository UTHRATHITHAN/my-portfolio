"use client";

import React, { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import contactAction from "./actions";
import Loader from "../Loader";
import Image from "next/image";
import successLogo from '@/public/checked.svg'

function Contact() {
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);

  const formSchema = z.object({
    name: z
      .string()

      .min(3, { message: " Name must be 3 or more characters long" })
      .max(50, { message: "Name must be 50 or fewer characters long" }),
    email: z
      .string()

      .email({ message: "Invalid email address" }),
    subject: z
      .string()

      .min(5, { message: " Subject must be 5 or more characters long" })
      .max(100, { message: "Subject must be 100 or fewer characters long" }),
    message: z
      .string()
      .min(15, { message: " Message must be 15 or more characters long" })
      .max(1000, { message: "Message must be 250 or fewer characters long" }),
  });

  const { reset, resetField, formState } = useForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoader(true);
    const res = await contactAction(values);
    if (res) {
      setLoader(false);
      setSuccess(true);
    }
  }

  return (
    <div className="text-center  ">
      <Dialog>
        <DialogTrigger>Contact</DialogTrigger>
        <DialogContent className="rounded-lg dark:bg-black bg-white">
          <DialogHeader>
            <DialogTitle className="text-center pb-10">
              {success ? "" : "Contact Me"}
            </DialogTitle>
            <DialogDescription>
              {success ? (
                <div className="flex-col h-[500px] flex justify-center items-center gap-y-12 pb-24">
                  <Image
                    src={successLogo}
                    alt="Success"
                    width={100}
                    height={100}
                  />
                  <div className="space-y-5">
                    <p className="text-xl font-semibold">
                      Email Successfull Send
                    </p>
                    <p
                      className="font-medium  cursor-pointer text-center"
                      onClick={() => setSuccess(false)}
                    >
                      Send Another Mail
                    </p>
                  </div>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your name"
                              {...field}
                              className=" bg-white text-black  dark:bg-zinc-900 dark:text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email"
                              {...field}
                              className=" bg-white text-black dark:bg-zinc-900 dark:text-white"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Subject"
                              {...field}
                              className=" bg-white text-black dark:bg-zinc-900 dark:text-white"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Type your message here."
                              {...field}
                              className="bg-white text-black dark:bg-zinc-900 dark:text-white h-40"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className=" flex justify-center items-center ">
                      <Button type="submit" className="w-20">
                        {loader ? (
                          <Loader className="w-5 h-5 text-gray-200 animate-spin dark:text-black-600 fill-black" />
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Contact;
