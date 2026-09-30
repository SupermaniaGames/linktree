# Supermania Games hub

One page that links to every game.

## Add a new game
1. Put its logo in `logos/` (square PNG, 512x512, for example `logos/carrom.png`).
2. Add a block to `games.json`:
   ```json
   {
     "name": "Supermania Carrom",
     "desc": "Flick, pocket and win.",
     "url": "https://supermaniagames.github.io/Carrom/",
     "logo": "logos/carrom.png",
     "tag": "Board"
   }
   ```
   Separate blocks with commas. The order in the file is the order on the page.
3. Commit. The page updates on its own.

## Coming soon
Leave out `url` or add `"soon": true`. The card shows "Coming soon" and is not tappable.
Remove `"soon": true` and add the `url` when the game is live.

## Logos
- `logos/supermania-games.png`: header logo
- `logos/boring-games.png`: "Presented by" logo
