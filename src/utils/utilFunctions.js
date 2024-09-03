export const arrayContainsObject = (pickedPlayers, player) => {
  for (let i = 0; i < pickedPlayers.length; i++) {
    if (pickedPlayers[i].id === player.id) return true;
  }
  return false;
};
