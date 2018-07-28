import loginStatus from "./login-status";

test("check status name", () => {
  expect(loginStatus().name).toBe("john.smith");
});

test("check status id", () => {
  expect(loginStatus().id).toBe("5ad8cdf7095b735f2125069e");
});
