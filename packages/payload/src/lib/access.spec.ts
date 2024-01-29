import { isAdmin, isAdminOrRole } from "./access";

describe("access", () => {
  it("isAdmin works", () => {
    const req = {
      user: {
        role: "admin",
      },
    };
    expect(isAdmin({ req })).toBe(true);
  });

  it("isAdminOrRole works", () => {
    const req = {
      user: {
        role: "admin",
      },
    };
    expect(isAdminOrRole("admin")({ req })).toBe(true);
  });

  it("isAdminOrRole returns false if role is not given role", () => {
    const req = {
      user: {
        role: "user",
      },
    };
    expect(isAdminOrRole("notuser")({ req })).toBe(false);
  });
});
