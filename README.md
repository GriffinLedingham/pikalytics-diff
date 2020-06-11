# pikalytics-diff

CLI tool to generate a weighted ranking diff between two Pokemon Home Battle Stadium ladder rankings.

# Usage

Generate `out.json`:

```node index.js ~/Data/newRankings.json ~/Data/oldRankings.json```

`newRankings.json` & `oldRankings.json` in this example are Pokemon Home ladder ranking data in the form of:

```json
[{"id":468,"form":0},{"id":547,"form":0},{"id":887,"form":0},{"id":815,"form":0},...]
```

# Output

```json
[{"pokemonId":752,"pokemonForm":0,"diff":-8,"newRank":"135","oldRank":"127","diffNorm":-0.05925925925925926},{"pokemonId":475,"pokemonForm":0,"diff":-6,"newRank":"102","oldRank":"96","diffNorm":-0.058823529411764705},...]
```

- `diff` - the positional change in ranking from the old ranking data to the new ranking data.
- `diffNorm` - the positional change in ranking, divided by `newRank`, such that ranking changes higher up on the ladder weigh more relevant than lower on the ladder. 
