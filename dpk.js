const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  function generateKey(candidate = TRIVIAL_PARTITION_KEY){
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      candidate = generateKey();
    }
  }
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } 
  else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length >= MAX_PARTITION_KEY_LENGTH) {
    candidate = generateKey();
  }
  return candidate;
};