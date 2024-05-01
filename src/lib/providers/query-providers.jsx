"use client";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import { toast } from "@/components/ui/use-toast";
// import ErrorHandler from "../error-handler";

export default function QueryProviders({ children }) {
  const client = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        // ErrorHandler(error);
        // toast({
        //   title: error?.response?.data?.message,
        // });
        console.log(error)
      },
    }),
  });

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
