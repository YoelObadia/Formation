'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";

interface LeadFormProps {
    data: {
        title: string;
        subtitle: string;
        button: string;
        success_title: string;
        success_message: string;
        copyright: string;
        input_placeholders: {
            name: string;
            email: string;
            phone: string;
            goal: string;
        }
    }
}

export function LeadFormSection({ data }: LeadFormProps) {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => {
            setIsSubmitted(true);
        }, 500);
    };

    return (
        <footer id="lead-form" className="min-h-screen flex flex-col justify-center py-24 bg-gradient-to-b from-[#020817] to-black border-t border-white/10">
            <div className="w-full max-w-[95vw] xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="max-w-2xl mx-auto">
                    <Card className="bg-white/5 border-white/10 shadow-2xl overflow-hidden glass-card">
                        <CardHeader className="text-center space-y-4 pt-10">
                            <CardTitle className="text-3xl sm:text-4xl font-bold text-white leading-tight">{data.title}</CardTitle>
                            <CardDescription className="text-gray-400 text-lg">
                                {data.subtitle}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-10 px-6 sm:px-12">
                            {isSubmitted ? (
                                <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{data.success_title}</h3>
                                    <p className="text-gray-400 text-lg">{data.success_message}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Input
                                                type="text"
                                                placeholder={data.input_placeholders.name}
                                                required
                                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[var(--color-brand-blue)] h-14 text-lg px-4"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input
                                                type="email"
                                                placeholder={data.input_placeholders.email}
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[var(--color-brand-blue)] h-14 text-lg px-4"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            type="tel"
                                            placeholder={data.input_placeholders.phone}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[var(--color-brand-blue)] h-14 text-lg px-4"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <textarea
                                            placeholder={data.input_placeholders.goal}
                                            className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-white/5 px-4 py-4 text-lg text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        ></textarea>
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange)]/90 text-white font-bold h-auto py-4 text-lg sm:text-xl transition-all duration-200 hover:scale-[1.02] mt-4 shadow-lg whitespace-normal leading-tight"
                                    >
                                        {data.button}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>

                    <div className="mt-16 text-center text-sm text-gray-600">
                        {data.copyright.replace("{year}", new Date().getFullYear().toString())}
                    </div>
                </div>
            </div>
        </footer>
    );
}
