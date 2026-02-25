import React, { useState } from 'react';
import { X, Phone, Mail, Lock, ArrowRight, Github } from 'lucide-react';

const AuthModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            onClose();
            alert(`${isLogin ? 'Logged in' : 'Signed up'} successfully!`);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            
            <div className="bg-white w-full max-w-[440px] rounded-[32px] overflow-hidden relative shadow-[0_25px_100px_rgba(0,0,0,0.15)] transform transition-all">
                
                <div className="h-32 bg-gradient-to-br from-[#10b1c1] to-[#12c2d6] p-8 flex items-end relative">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all active:scale-90"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <div>
                        <h2 className="text-white text-2xl font-black tracking-tight">
                            {isLogin ? 'Welcome Back!' : 'Join Snapmint'}
                        </h2>
                        <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">
                            {isLogin ? 'Login to continue shopping' : 'Start your EMI journey today'}
                        </p>
                    </div>
                </div>

                <div className="p-8">
                    
                    <div className="flex bg-[#f4f8fa] p-1.5 rounded-2xl mb-8">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${isLogin ? 'bg-white shadow-sm text-[#10b1c1]' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${!isLogin ? 'bg-white shadow-sm text-[#10b1c1]' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {!isLogin && (
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Full Name</label>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-[#f4f8fa] border-2 border-transparent focus:border-[#10b1c1] rounded-2xl px-12 py-4 text-sm font-bold outline-none transition-all placeholder:text-gray-300"
                                    />
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#10b1c1] transition-colors" />
                                </div>
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Email Address</label>
                            <div className="relative group">
                                <input
                                    type="email"
                                    required
                                    placeholder="name@email.com"
                                    className="w-full bg-[#f4f8fa] border-2 border-transparent focus:border-[#10b1c1] rounded-2xl px-12 py-4 text-sm font-bold outline-none transition-all placeholder:text-gray-300"
                                />
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#10b1c1] transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center px-4">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Password</label>
                                {isLogin && (
                                    <button type="button" className="text-[10px] font-black text-[#10b1c1] uppercase tracking-widest hover:underline">Forgot?</button>
                                )}
                            </div>
                            <div className="relative group">
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full bg-[#f4f8fa] border-2 border-transparent focus:border-[#10b1c1] rounded-2xl px-12 py-4 text-sm font-bold outline-none transition-all placeholder:text-gray-300"
                                />
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#10b1c1] transition-colors" />
                            </div>
                        </div>

                        <button
                            disabled={isLoading}
                            className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all transform active:scale-95 flex items-center justify-center gap-3 relative overflow-hidden ${isLoading ? 'bg-gray-100 text-gray-400' : 'bg-[#1a1c1e] text-white hover:bg-[#10b1c1] shadow-lg shadow-black/10'}`}
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    {isLogin ? 'Login' : 'Create Account'}
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    
                    <div className="flex items-center gap-4 my-8">
                        <div className="flex-1 h-[1px] bg-gray-100" />
                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Or continue with</span>
                        <div className="flex-1 h-[1px] bg-gray-100" />
                    </div>

                    
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-3 py-4 rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-all active:scale-95 group">
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">G</div>
                            <span className="text-xs font-black text-gray-600 uppercase tracking-tight">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-3 py-4 rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-all active:scale-95 group">
                            <Github className="w-5 h-5 text-gray-800" />
                            <span className="text-xs font-black text-gray-600 uppercase tracking-tight">Github</span>
                        </button>
                    </div>

                    <p className="text-center text-[10px] text-gray-400 mt-8 leading-relaxed font-bold">
                        By continuing, you agree to our <span className="text-gray-600 underline cursor-pointer">Terms of Service</span> and <span className="text-gray-600 underline cursor-pointer">Privacy Policy</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
