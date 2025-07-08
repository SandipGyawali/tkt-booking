import { useState } from "react";
import {
  Film,
  Gamepad2,
  Zap,
  Star,
  ArrowRight,
  Shield,
  Users,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Link, useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

export function LoginForm() {
  const navigate = useNavigate();
  const { openSignIn } = useClerk();
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleOAuthLogin = async (provider: string) => {
    setIsLoading(provider);
    await openSignIn();
    // Simulate loading for demo - replace with actual OAuth logic
    setTimeout(() => {
      setIsLoading(null);
      console.log(`Logging in with ${provider}`);
      // Redirect to OAuth provider or handle authentication
    }, 2000);
  };

  const floatingElements = [
    {
      icon: Film,
      color: "bg-pink-300",
      position: "top-10 left-10",
      delay: "0s",
    },
    {
      icon: Gamepad2,
      color: "bg-cyan-300",
      position: "top-20 right-20",
      delay: "1s",
    },
    {
      icon: Zap,
      color: "bg-yellow-200",
      position: "bottom-20 left-20",
      delay: "2s",
    },
    {
      icon: Star,
      color: "bg-purple-300",
      position: "bottom-10 right-10",
      delay: "0.5s",
    },
    {
      icon: Sparkles,
      color: "bg-green-300",
      position: "top-1/2 left-5",
      delay: "1.5s",
    },
    {
      icon: Shield,
      color: "bg-orange-300",
      position: "top-1/3 right-5",
      delay: "2.5s",
    },
  ];

  const oauthProviders = [
    {
      name: "Google",
      icon: "G",
      color: "bg-black",
      textColor: "text-white",
      description: "Continue with your Google account",
    },
    {
      name: "Email",
      icon: "M",
      color: "",
      textColor: "text-black",
      description: "Continue with your Email Account",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffde8] via-yellow-100 to-cyan-200 font-mono relative overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} w-16 h-16 ${element.color} border-4 border-black rounded-lg shadow-lg animate-bounce hidden lg:flex items-center justify-center`}
          style={{ animationDelay: element.delay, animationDuration: "3s" }}
        >
          <element.icon className="h-8 w-8 text-black" />
        </div>
      ))}

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg">
          {/* Main Login Card */}
          <Card className="p-8 mb-8 bg-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-2">
                SIGN IN WITH
              </h3>
              <p className="text-gray-600 text-sm">
                Select your favorite platform to get started
              </p>
            </div>

            {/* OAuth Providers */}
            <div className="space-y-4">
              <Button size="sm" onClick={() => navigate("/")}>
                <ArrowLeft size={16} /> Home
              </Button>

              {oauthProviders.map((provider) => (
                <Button
                  key={provider.name}
                  onClick={() => handleOAuthLogin(provider.name.toLowerCase())}
                  disabled={isLoading !== null}
                  className={`w-full ${provider.color} ${provider.textColor} border-2 border-black text-lg py-4 relative overflow-hidden`}
                  variant="outline"
                >
                  {isLoading === provider.name.toLowerCase() ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>CONNECTING...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border-2 border-black shadow-md">
                        {provider.name === "Apple" ? (
                          <div className="w-5 h-5 bg-black rounded-sm"></div>
                        ) : (
                          <span className="text-sm font-bold text-black">
                            {provider.icon}
                          </span>
                        )}
                      </div>
                      <span className="font-bold">
                        CONTINUE WITH {provider.name.toUpperCase()}
                      </span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </Button>
              ))}
            </div>

            {/* Security Notice */}
            <div className="mt-5 p-4 bg-green-100 border-2 border-black rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-400 border-2 border-black rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-sm">
                    100% SECURE AUTHENTICATION
                  </h4>
                  <p className="text-xs text-gray-600">
                    We never store your passwords. All authentication is handled
                    securely by trusted providers.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Benefits Section */}
          <Card className="p-6 mb-6">
            <h3 className="text-2xl font-bold text-black text-center mb-6">
              WHY SIGN IN?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "INSTANT BOOKING",
                  description: "Skip the queues and book tickets in seconds",
                  icon: <Zap className="h-6 w-6 text-black" />,
                },
                {
                  title: "Transaction View",
                  description: "Can see the transaction of the ticket viewed",
                  icon: <Star className="h-6 w-6 text-black" />,
                },
                {
                  title: "Social Features",
                  description: "Share reviews and connect with friends",
                  icon: <Users className="h-6 w-6 text-black" />,
                },
              ].map((val) => (
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#fffde8] border-2 border-black rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                    {val.icon}
                  </div>
                  <h4 className="font-bold text-black text-sm mb-1">
                    {val.title}
                  </h4>
                  <p className="text-xs text-black">{val.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Footer Links */}
          <div className="text-center mt-6 space-y-2">
            <div className="flex justify-center space-x-4 text-xs text-gray-500">
              <Link
                to="/privacy"
                className="hover:text-red-600 transition-colors font-medium"
              >
                PRIVACY POLICY
              </Link>
              <span>•</span>
              <Link
                to="/"
                className="hover:text-red-600 transition-colors font-medium"
              >
                TERMS OF SERVICE
              </Link>
              <span>•</span>
              <Link
                to="/help"
                className="hover:text-red-600 transition-colors font-medium"
              >
                HELP CENTER
              </Link>
            </div>
            <p className="text-xs text-gray-600">
              © 2024 RETRO CINEMA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
