const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
    expect(trivialKey.length).toBeLessThan(256);
  });
  
  it("Return the literal '543' when you don't give a string variable", () => {
    let event = { partitionKey: 543 };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("543");
    expect(trivialKey.length).toBeLessThan(256);
  });

  it("Return the literal '543' when you give a string variable", () => {
    let event = { partitionKey: "543" };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("543");
    expect(trivialKey.length).toBeLessThan(256);
  });

  it("Return new number when providing a partitionKey with more than 256 characters", () => {
    const bigPartitionKey = "1".repeat(257);
    let event = { partitionKey: bigPartitionKey };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).not.toBe(bigPartitionKey);
    expect(trivialKey.length).toBeLessThan(256);
  });
  
  it("Return a new partition Key even with an empty string", () => {
    let event = { partitionKey: "" };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBeDefined();
    expect(trivialKey.length).toBeLessThan(256);
  });
});
