"use client";
import type React from "react";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Ticket,
  CreditCard,
  MapPin,
  RefreshCw,
} from "lucide-react";
import { Card } from "./ui/Card";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: React.ElementType;
}

export function RetroFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "HOW DO I BOOK MOVIE TICKETS?",
      answer:
        "Booking tickets is super easy! Just select your movie, choose your preferred showtime, pick your seats, and complete the payment. You'll receive a confirmation email with your e-tickets instantly!",
      category: "booking",
      icon: Ticket,
    },
    {
      id: 2,
      question: "WHAT PAYMENT METHODS DO YOU ACCEPT?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, Apple Pay, Google Pay, and digital wallets. All transactions are 100% secure with SSL encryption.",
      category: "payment",
      icon: CreditCard,
    },
    {
      id: 3,
      question: "CAN I CANCEL OR REFUND MY TICKETS?",
      answer:
        "Yes! You can cancel your tickets up to 2 hours before the showtime for a full refund. Cancellations made within 2 hours will receive a 50% refund. No refunds for no-shows.",
      category: "booking",
      icon: RefreshCw,
    },
    {
      id: 4,
      question: "WHERE ARE YOUR THEATER LOCATIONS?",
      answer:
        "We have 50+ theaters across the city! Use our theater locator to find the nearest cinema to you. All locations feature state-of-the-art sound systems and comfortable seating.",
      category: "locations",
      icon: MapPin,
    },
  ];

  const categories = [
    { id: "all", label: "ALL QUESTIONS", color: "bg-yellow-400" },
    { id: "booking", label: "BOOKING", color: "bg-pink-400" },
    { id: "payment", label: "PAYMENT", color: "bg-cyan-400" },
    { id: "locations", label: "LOCATIONS", color: "bg-purple-400" },
    { id: "showtimes", label: "SHOWTIMES", color: "bg-green-400" },
    { id: "pricing", label: "PRICING", color: "bg-orange-400" },
    { id: "snacks", label: "SNACKS", color: "bg-red-400" },
    { id: "policies", label: "POLICIES", color: "bg-blue-400" },
    { id: "accessibility", label: "ACCESSIBILITY", color: "bg-indigo-400" },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs =
    activeCategory === "all"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fffde8] border-y-2 font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <h2 className="text-5xl font-bold text-black">FAQ</h2>
            <div className="w-12 h-12 border-4 border-black rounded-lg flex items-center justify-center shadow-lg">
              <HelpCircle className="h-7 w-7 text-black" />
            </div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Got questions about booking tickets, payments, or our theaters?
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            BROWSE BY CATEGORY
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 border-2 border-black rounded-lg font-bold text-black transition-all duration-200 shadow-md hover:shadow-none hover:translate-y-1 ${
                  activeCategory === category.id
                    ? `${category.color} scale-105`
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 text-left flex items-center justify-between transition-colors duration-200"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-10 h-10 bg-[#fffde8]  border-2 border-black rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                    <item.icon className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black pr-4">
                    {item.question}
                  </h3>
                </div>
                <div className="w-8 h-8 border-2 border-black rounded-lg flex items-center justify-center shadow-md flex-shrink-0 transition-transform duration-200">
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="h-4 w-4 text-black" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-black" />
                  )}
                </div>
              </button>

              {openItems.includes(item.id) && (
                <div className="px-6 pb-2 border-t-2 border-black">
                  <div className="pt-4">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-red-300 border-4 border-black rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <HelpCircle className="h-10 w-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">
              NO QUESTIONS FOUND
            </h3>
            <p className="text-gray-600">
              Try selecting a different category or browse all questions.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
