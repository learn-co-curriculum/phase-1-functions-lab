function distanceFromHqInBlocks(blockNum) {
  if (blockNum >= 42) {
    return blockNum - 42;
  } else {
    return 42 - blockNum;
  }
}

distanceFromHqInBlocks();
