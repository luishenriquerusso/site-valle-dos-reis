"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { signIn } from "next-auth/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

type Props = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};

export function SignIn(props: Props){

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const formSchema = z.object({
    email: z.string().email({
      message: "Digite um Email válido",
    }),
    password: z.string().min(8, {
      message: "Pelo menos 8 caracteres",
    })
  })

  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError('')

    const response = await signIn("credentials", {
      username: values.email,
      password: values.password,
      redirect: true,
      //callbackUrl: props.callbackUrl ?? "http://localhost:3000",
      callbackUrl: props.callbackUrl ?? "https://site.valledosreis.com.br",
    });

    if (response && !response?.error) {
      //router.push(props.callbackUrl ?? "http://localhost:3000");
      router.push(props.callbackUrl ?? "https://site.valledosreis.com.br");
    }
  }

  return (
    <div className="w-full m-auto bg-slate-100 lg:max-w-lg">
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <CardHeader className="space-y-2">
              <CardTitle className="text-center mb-4">
                <Image src="/logo.png" alt="Logo" width={100} height={80} className="mx-auto" />
              </CardTitle>
              <CardDescription className="text-center min-w-[300px] mt-4">
             
              </CardDescription>
            </CardHeader>
     
            <div className="relative mb-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Digite seu email e Senha
                </span>
              </div>
            </div>

            <CardContent className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>             
                    <FormControl>
                      <Input placeholder="Digite seu E-mail" {...field} autoComplete="email" iconName="email" className="pl-9" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>         
                    <FormControl>
                      <Input type="password" placeholder="Digite sua Senha" {...field} autoComplete="password" iconName="lock" className="pl-9" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>

            {!!props.error && (
              <p className="w-full bg-red-100 text-red-600 text-center p-2 mt-4">
                Algo deu Errado! Tente novamente!
              </p>
            )}

            <CardFooter className="flex flex-col">
              {error &&
                <div className="flex w-full items-center p-2 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                  <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Erro!</span>
                  <div>
                    <span className="font-medium">Erro!</span> {error}
                  </div>
                </div>
              }
              <div className="flex gap-2 min-w-full">
                <Button className="w-full bg-slate-400 text-slate-50 hover:bg-slate-600" onClick={() => router.push('/')} >Cancelar</Button>
                <Button className="w-full bg-slate-700 text-slate-50 hover:bg-slate-900 hover:text-white font-semibold" type="submit" >ENTRAR</Button>
              </div>             
            </CardFooter>
          </form>
        </Form>
      </Card>

    </div> 
  )
} 