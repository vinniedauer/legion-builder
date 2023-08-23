'use client'
import { draftMode } from 'next/headers'
import { useUser } from '@auth0/nextjs-auth0/client'

//Get user login
//Ping the Sanity backend to see if a user matches their email
//If a user matches, return the Legion lists associated with the user
//Allow the user to create a new list, which saves it as a sanity document of the type List
export default function Home({ params}: { params: any }) {

    const { user, error, isLoading } = useUser()

    // if (isLoading) return <div>Loading...</div>
    // if (error) return <div>{error.message}</div>

    return (
        <main>
            <h1>Legion Builder</h1>
            { user ? (
                <>
                <h2>Welcome, {user.nickname}!</h2>
                <a href="/api/auth/logout">Logout</a>
                <pre>
                    {JSON.stringify(user, null, 2)}
                </pre>
                </>
            ) : (
                <a href="/api/auth/login">Login or Register Here</a>
            )}
        </main>
    )
}