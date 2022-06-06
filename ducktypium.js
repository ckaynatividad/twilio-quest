class Ducktypium {
  constructor(color) {
    this.color = color;
    this.colors = ["red", "blue", "yellow"];
    this.calibrationSequence = [];

    if (!this.colors.find((col) => col === color)) {
      throw new Error("error");
    }
  }

  refract(color) {
    if (!this.colors.find((colorType) => colorType === color)) {
      throw new Error("error");
    }
    const colorMap = {
      red: { blue: "purple", yellow: "orange" },
      yellow: { red: "orange", blue: "green" },
      blue: { red: "purple", yellow: "green" },
    };

    return this.color === color ? this.color : colorMap[color][this.color];
  }

  calibrate(arr) {
    const sorted = arr.sort();

    this.calibrationSequence = sorted.reduce((a, b) => {
      a.push(b * 3);
      return a;
    }, []);
    return this.calibrationSequence;
  }
}
