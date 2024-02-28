'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return(
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat IA</CardTitle>
        <CardDescription>Using Versel SDK to Create a chat bot.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full space-y-4 pr-4">
          { messages.map(message => {
            return(
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>JP</AvatarFallback>
                    <AvatarImage src="https://github.com/jpmonteiroo.png"></AvatarImage>
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>JP</AvatarFallback>
                    <AvatarImage src="https://github.com/versel.png"></AvatarImage>
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-800">
                    {message.role === 'user' ? 'Humano:' : 'AI'}
                  </span> 
                  {message.content}
                </p>
              </div>
            )
          }) }
        </ScrollArea>
      </CardContent>
      <CardFooter >
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input placeholder="How can i help you?" value={input} onChange={handleInputChange}/>
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}