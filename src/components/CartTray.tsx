import React from "react";
import { X, ShoppingCart, Trash2, Calendar, FileCheck, ArrowRight } from "lucide-react";
import { QuoteCartItem } from "../types";

interface CartTrayProps {
  isOpen: boolean;
  onClose: () => void;
  cart: QuoteCartItem[];
  onRemoveCartItem: (productId: string, selectedSize: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

export default function CartTray({ isOpen, onClose, cart, onRemoveCartItem, onClearCart, onCheckout }: CartTrayProps) {
  if (!isOpen) return null;

  const totalQty = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        {/* Backdrop glass */}
        <div 
          onClick={onClose} 
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        ></div>

        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-slate-950 text-white shadow-2xl border-l border-slate-800">
              
              {/* Header */}
              <div className="px-6 py-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5 text-blue-400" />
                  <h3 className="font-display font-extrabold text-white text-base">Your Quote Inquiry</h3>
                </div>
                <button 
                  onClick={onClose} 
                  className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
                  title="Close slide tray"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items Panel */}
              <div className="flex-1 py-6 overflow-y-auto px-6 space-y-4">
                {cart.length > 0 ? (
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div 
                        key={`${item.product.id}-${item.selectedSize}`}
                        className="bg-slate-900/40 p-4 rounded-xl border border-slate-850 flex items-center justify-between"
                      >
                        <div className="min-w-0 pr-2">
                          <p className="text-xs font-mono font-bold text-slate-500 uppercase">{item.product.chemicalCode}</p>
                          <p className="text-sm font-semibold text-slate-200 truncate">{item.product.name}</p>
                          <p className="text-[11px] font-mono text-blue-400 mt-1 select-all">Size: {item.selectedSize}</p>
                          <p className="text-[10px] text-slate-500 mt-0.5 font-light">Packaging spec: Heavy shipment dilution</p>
                        </div>
                        <div className="flex items-center space-x-3 shrink-0">
                          <div className="text-right">
                            <p className="text-xs font-mono text-slate-300 font-bold">QTY: {item.quantity}</p>
                            <span className="text-[9px] bg-indigo-950 text-indigo-400 border border-indigo-900 px-1 py-0.5 rounded font-mono font-bold">DISPATCH</span>
                          </div>
                          <button
                            onClick={() => onRemoveCartItem(item.product.id, item.selectedSize)}
                            className="p-1 text-slate-500 hover:text-red-400 hover:bg-slate-900 rounded"
                            title="Remove from quotation builder"
                          >
                            <Trash2 className="w-4.5 h-4.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <ShoppingCart className="w-12 h-12 text-slate-800 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-slate-300">Quote Basket is Empty</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto leading-relaxed">
                      Please browse our chemical specifications catalog and include standard pails or cases to request wholesale prices.
                    </p>
                  </div>
                )}
              </div>

              {/* Summary and proceed checkout footer inside tray */}
              <div className="border-t border-slate-850 px-6 py-6 bg-slate-950 space-y-4">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Inquiry Item Lines:</span>
                  <span className="font-mono text-white tracking-wider">{cart.length}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Batch Capacity:</span>
                  <span className="font-mono text-white text-sm font-bold tracking-wider">{totalQty} Units</span>
                </div>

                <div className="pt-2 flex gap-3">
                  {cart.length > 0 && (
                    <button
                      onClick={onClearCart}
                      className="flex-1 py-3 text-center border border-slate-800 hover:border-slate-700 bg-slate-900 hover:bg-slate-850 text-slate-300 font-mono text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                    >
                      Clear Basket
                    </button>
                  )}
                  <button
                    onClick={onCheckout}
                    className="flex-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-mono text-center font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <span>Proceed to Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex justify-center items-center space-x-2 text-[10px] text-slate-600 font-mono pt-2">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Freight routing active from: Jersey City, NJ</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
