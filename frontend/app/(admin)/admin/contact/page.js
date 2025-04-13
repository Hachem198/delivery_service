"use client";
import React, { useState } from "react";
import AdminMessageCard from "@/components/admin/contact/AdminMessageCard";
export default function pageContact() {
  const [messages, useMessages] = useState([
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message:
        "ffpdzlkfpqcqsod zafafzafzafzafzafzafzg,ijezrgiçjzeigjezijfiezjfiezjfiezjfiezjfijezifjezijfiezjvciezjiàgeg;ozkeofkoezfjaàvjezdjvàiajzfijaeifja",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message:
        "ffpdzlk afafzafzafzafzafzafzg,ijezrgiçjzeigjezijfiezjfiezjfiezjfiezjfijezifjezijfiezjvciezjiàgeg;ozkeofko afafzafzafzafzafzafzg,ijezrgiçjzeigjezijfiezjfiezjfiezjfiezjfijezifjezijfiezjvciezjiàgeg;ozkeofko fpqcqso",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message:
        "ffpdzlkf afafzafzafzafzafzafzg,ijezrgiçjzeigjezijfiezjfiezjfiezjfiezjfijezifjezijfiezjvciezjiàgeg;ozkeofko afafzafzafzafzafzafzg,ijezrgiçjzeigjezijfiezjfiezjfiezjfiezjfijezifjezijfiezjvciezjiàgeg;ozkeofkopqcqso",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message: "ffpdzlkfpqcqso",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message:
        "ffpdz afafzafzafzafzafzafzg,ijezrgiçjzeigjezijfiezjfiezjfiezjfiezjfijezifjezijfiezjvciezjiàgeg;ozkeofko afafzafzafzafzafzafzg,ijezrgiçjzeigjezijfiezjfiezjfiezjfiezjfijezifjezijfiezjvciezjiàgeg;ozkeofkolkfpqcqso",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message: "ffpdzlkfpqcqso",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message: "ffpdzlkfpqcqso",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message: "ffpdzlkfpqcqso",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message: "ffpdzlkfpqcqso",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message: "ffpdzlkfpqcqso",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message: "ffpdzlkfpqcqso",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message: "ffpdzlkfpqcqso",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message: "ffpdzlkfpqcqso",
    },
    {
      nom: "hachem",
      prenom: "fsqd",
      email: "fdsfsd@gfdg.com",
      message: "ffpdzlkfpqcqso",
    },
  ]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {messages.map((message, i) => {
        return <AdminMessageCard key={i} message={message}></AdminMessageCard>;
      })}
    </div>
  );
}
