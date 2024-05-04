import { NextRequest } from "next/server";

export const config = {
  api: {
    externalResolver: true,
  },
};

export type VerifyReply = {
  code: string;
  detail: string;
};

const verifyEndpoint = `${process.env.NEXT_PUBLIC_WLD_API_BASE_URL}/api/v1/verify/${process.env.NEXT_PUBLIC_WLD_APP_ID}`;

export async function POST(req: NextRequest) {
  const body = await req.json();
  //   return new Promise((resolve, reject) => {
  console.log("Received request to verify credential:\n", body);
  const reqBody = {
    nullifier_hash: body.nullifier_hash,
    merkle_root: body.merkle_root,
    proof: body.proof,
    verification_level: body.verification_level,
    action: body.action,
    signal: body.signal,
  };
  console.log("Sending request to World ID /verify endpoint:\n", reqBody);
  const verifyRes = await fetch(verifyEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });
  const wldResponse = await verifyRes.json();
  console.log(
    `Received ${verifyRes.status} response from World ID /verify endpoint:\n`,
    wldResponse
  );
  if (verifyRes.status == 200) {
    // This is where you should perform backend actions based on the verified credential, such as setting a user as "verified" in a database
    // For this example, we'll just return a 200 response and console.log the verified credential
    console.log(
      "Credential verified! This user's nullifier hash is: ",
      wldResponse.nullifier_hash
    );
    return Response.json(wldResponse, { status: 200 });
    //   resolve(void 0);
  } else {
    // This is where you should handle errors from the World ID /verify endpoint. Usually these errors are due to an invalid credential or a credential that has already been used.
    // For this example, we'll just return the error code and detail from the World ID /verify endpoint.

    return Response.json(wldResponse, { status: 400 });
  }
}
