'use client';

import { Card, CardContent } from "@/components/ui/card";
import { User, Sparkles, Code2, Users2 } from "lucide-react";
import Image from "next/image";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image?: string;
}

interface TeamProps {
    data: TeamMember[];
    title: string;
}

export function TeamSection({ data, title }: TeamProps) {
    // Helper to assign colors/icons based on role/index if not present in data
    const getRoleStyle = (role: string) => {
        if (role.includes("IA")) return { color: "text-[var(--color-brand-blue)]", bg: "bg-[var(--color-brand-blue)]", icon: Sparkles };
        if (role.includes("No-Code")) return { color: "text-[var(--color-brand-orange)]", bg: "bg-[var(--color-brand-orange)]", icon: Code2 };
        return { color: "text-emerald-500", bg: "bg-emerald-500", icon: Users2 };
    };

    return (
        <section className="min-h-screen flex flex-col justify-center py-24 bg-[#0a0a0a]">
            <div className="w-full max-w-[95vw] xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white sm:text-5xl text-center">{title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {data.map((member, index) => {
                        const style = getRoleStyle(member.role);
                        const Icon = style.icon;

                        return (
                            <Card key={index} className="overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-lg m-0 p-0 group">
                                <div className="relative w-full aspect-square m-0 p-0 bg-slate-900">
                                    {member.image ? (
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover object-top block transition-transform duration-500 group-hover:scale-105"
                                            priority={index < 3}
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center relative">
                                            <div className={`absolute inset-0 opacity-10 ${style.bg}`}></div>
                                            <Icon className={`w-16 h-16 ${style.color}`} />
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 space-y-4 relative bg-[#0a0a0a]">
                                    <div className={`absolute top-0 left-6 right-6 h-0.5 ${style.bg} opacity-50`}></div>

                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mt-2">{member.name}</h3>
                                        <p className={`text-base font-bold uppercase tracking-wider mt-1 ${style.color}`}>
                                            {member.role}
                                        </p>
                                    </div>

                                    <p className="text-gray-400 text-base leading-relaxed text-justify">
                                        {member.bio}
                                    </p>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
