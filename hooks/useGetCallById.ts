"use client"
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

// a HOOK is a function that starts with the word use
export const useGetCallById = (id: string | string[]) => {
    const [call, setCall] = useState<Call>();
    const [isCallLoading, setIsCallLoading] = useState(true);
    const client = useStreamVideoClient();

    useEffect(() => {
        if(!client) return;
        // To call an async function in a hook the function needs to be declared inside of the hook
        const loadCall = async () => {
            const {calls} = await client.queryCalls({
                filter_conditions: {
                    id
                }
            })
            if(calls.length  > 0) setCall(calls[0]);
            setIsCallLoading(false);
        }
        loadCall();
    }, [client , id])

    return {call , isCallLoading}
}