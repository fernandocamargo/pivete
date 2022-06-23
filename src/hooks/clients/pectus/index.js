import { create } from "axios";
import { useMemo } from "react";

export default () => {
  const client = useMemo(
    () =>
      create({
        headers: {
          "Content-Type": "text/plain",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          Authorization:
            "eyJraWQiOiJpRmowWmJnZnNkMWdEbW5KVXZpRzduQlFwVjV2aXFERnB4ajg4TEhBd2FNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjYWI0NjQzZS1lOTg0LTQ4MTItOGM4Ny0wNDc1Mjk0NzFkYjMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaHR0cHM6XC9cL2hhc3VyYS5pb1wvand0XC9jbGFpbXMiOiJ7XCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzXCI6W1wiY29tcGFueV9yb290X3VzZXJcIl0sXCJ4LWhhc3VyYS11c2VyLWlkXCI6XCJjYWI0NjQzZS1lOTg0LTQ4MTItOGM4Ny0wNDc1Mjk0NzFkYjNcIixcIngtaGFzdXJhLWRlZmF1bHQtcm9sZVwiOlwiY29tcGFueV9yb290X3VzZXJcIixcIngtaGFzdXJhLWNvbXBhbnktaWRcIjpcIjQzNzRlNjA2LWE3NWItNGM1OC05MDZiLTc1NjI1ZGM1NDdmZVwifSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX2t2SmNCcHlhSiIsImNvZ25pdG86dXNlcm5hbWUiOiJjYWI0NjQzZS1lOTg0LTQ4MTItOGM4Ny0wNDc1Mjk0NzFkYjMiLCJvcmlnaW5fanRpIjoiMWU0ZjI5MjEtN2QyYy00MzFmLWIwOTctM2I0OTc4NDBiNGE2IiwiYXVkIjoiN2Z2ZzhnaG1lcjg2dHRhNWpqOXA4MHZyaTEiLCJldmVudF9pZCI6IjY2Y2U3ZTIyLTdlZGQtNGNiMC1hOTdiLTEwMDlhZjkyNjIyOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjU1ODc0MzE4LCJleHAiOjE2NTU5NjA3MTgsImlhdCI6MTY1NTg3NDMxOCwianRpIjoiNzc3ZDczMjYtOTUyNC00MDQ0LWIyNjMtMjQ2YTNjNjM2NGFjIiwiZW1haWwiOiJjYXJsQHBlY3R1c2ZpbmFuY2UuY29tIn0.VzYWxWq7bFWK1lo-vfuIMZnFxu7PsqPc1fihX810TsEr4n-IF-5EXrbwZ0XZMbbh3kRpKLmJp-ZTFgZ12QoOD105ApV8rgGAHowcG9W_yfvhmhhZ_rpuzp7mnF_z_TzHVU3JBmvxReKey5oIAXVcYyKEpJjH5zXR-cUbG1BxWCzalkQ_y2T_AmFk72XEkh_LSTBsGtMANKwLynSH4CLYQLO-IBCVckMjJx_klhUiYn4cyhgo-3C1QwegRvJsPcLh7OMBq9TpL6Y8VzInFwRCZiDi8shdaagGxyLKYQL3W7iq90LJzAwkEKC_l7LWrhh5Ee_hfD-9jFhvfR76zf2DIQ",
        },
        baseURL:
          "https://p81d67rw8j.execute-api.eu-central-1.amazonaws.com/dev/pivot-table-service/",
      }),
    []
  );

  return client;
};
