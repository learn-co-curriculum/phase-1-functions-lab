const expect = chai.expect;

describe('index.js', () => {
  describe('distanceFromHqInBlocks', () => {
    it('returns a distance in feet', () => {
      expect(distanceFromHqInBlocks(43)).to.equal(1);
    })

    it('returns a distance in feet', () => {
      expect(distanceFromHqInBlocks(50)).to.equal(8);
    })

    it('calculates distances below 42nd street', () => {
      expect(distanceFromHqInBlocks(34)).to.equal(8)
    })
  })

  describe('distanceFromHqInFeet', () => {
    it('returns a distance in feet', () => {
      expect(distanceFromHqInFeet(43)).to.equal(264);
    })

    it('returns a distance in feet', () => {
      expect(distanceFromHqInFeet(50)).to.equal(2112);
    })

    it('calculates distances below 42nd street', () => {
      expect(distanceFromHqInFeet(34)).to.equal(2112)
    })
  })

  describe('distanceTravelledInFeet', () => {
    it('returns the distance travelled in feet', () => {
      expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
    })

    it('returns a distance in feet', () => {
      expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
    })

    it('returns distance when destination is below distance', () => {
      expect(distanceTravelledInFeet(34, 28)).to.equal(1584)
    })
  })

  describe('calculatesFarePrice(start, destination)', () => {
    it('gives customers a free sample', () => {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    })

    it('charges 2 cents per foot (and does not give any discount on the first 200 feet) when total feet travelled between 400 and 2000 in example below is 528', () => {
      // total feet travelled is 528 -> 10.56
      expect(calculatesFarePrice(34, 32)).to.equal(10.56)
    })

    it('charges 25 dollars for a distance over 2000 feet', () => {
      expect(calculatesFarePrice(50, 58)).to.equal(25);
    })

    it('does not allow rides over 2500 feet', () => {
      expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far')
    })


  })
});
