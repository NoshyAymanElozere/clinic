"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Model({ children, model, setModel, className }) {
  return (
    <Transition appear show={model} as={Fragment}>
      <Dialog
        as="div"
        open={model}
        onClose={() => setModel(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 overflow-y-auto bg-[black]/60">
          <div className="flex items-center justify-center min-h-full px-4 edit-item-info">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`flex w-full items-center justify-center ${className}`}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
