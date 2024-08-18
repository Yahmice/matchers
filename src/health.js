export default function healthChecker(character) {
	const { health } = character;

	if (health > 50) {
		return 'healthy';
	}
	if (health >= 15 && health <= 50) {
		return 'wounded';
	}
	if (health < 15) {
		return 'critical';
	}
};
