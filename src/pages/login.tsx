import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsExports);

const formFields = {
  signIn: {
    username: {
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
      required: true,
    },
  },
  signUp: {
    username: {
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
      required: true,
    },
    password: {
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
  },
};

interface CognitoUserMinimal {
  attributes?: {
    email?: string;
    [key: string]: any;
  };
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded shadow p-6">
        <Authenticator formFields={formFields}>
          {({ signOut, user }) => {
            const cognitoUser = user as CognitoUserMinimal | undefined;

            return (
              <div className="text-center">
                <h1 className="text-2xl font-semibold mb-4">
                  Hello, {cognitoUser?.attributes?.email ?? "Guest"}
                </h1>
                <button
                  onClick={signOut}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Sign out
                </button>
              </div>
            );
          }}
        </Authenticator>
      </div>
    </div>
  );
}
