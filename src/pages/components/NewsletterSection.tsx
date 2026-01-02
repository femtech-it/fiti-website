import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Input } from 'antd';
import { IoMdSend } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { subscribeEmail } from "../../api/contactApi";
import { toast } from "sonner";
import { FaSpinner } from "react-icons/fa";

const NewsletterSection = () => {
    const [email, setEmail] = useState("");

    const subscriptionMutation = useMutation({
        mutationFn: subscribeEmail,
        onSuccess: () => {
            toast.success("Successfully subscribed to our newsletter!");
            setEmail("");
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || "Subscription failed. Please try again.");
        }
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            toast.warning("Please enter your email address.");
            return;
        }
        if (!emailRegex.test(email)) {
            toast.warning("Please enter a valid email address.");
            return;
        }

        subscriptionMutation.mutate({ email });
    };

    return (
        <section className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto relative overflow-hidden bg-gradient-to-br from-primary to-[#0010A3] rounded-[30px] md:rounded-[40px] shadow-[0_20px_50px_rgba(0,16,163,0.3)] p-8 md:p-20 text-center">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight">
                            Subscribe to <br className="sm:hidden" />
                            <span className="text-secondary">Our Newsletter</span>
                        </h2>
                        <p className="text-white/80 text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                            Stay updated with the latest tech trends, course announcements, and success stories from the FEMTECH Information Technology Training Centre.
                        </p>

                        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-2xl md:rounded-[25px] border border-white/20 shadow-2xl">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                    placeholder="Enter your Email Address"
                                    variant="borderless"
                                    className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg text-white placeholder:text-white/50 flex-grow focus:outline-none"
                                    disabled={subscriptionMutation.isPending}
                                />
                                <button
                                    type="submit"
                                    disabled={subscriptionMutation.isPending}
                                    className="bg-secondary text-white h-12 md:h-14 px-6 md:px-10 text-lg md:text-xl font-bold rounded-xl md:rounded-[20px] shadow-xl hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {subscriptionMutation.isPending ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            <span>Subscribing...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Subscribe</span>
                                            <IoMdSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        <p className="mt-8 md:mt-10 text-white/40 text-xs md:text-sm font-medium">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
