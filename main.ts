// Out-of-office reply: one line, written verbatim to /output/entry.txt.
// The joke is a classic OOO setup with a twist in the second sentence:
// urgent mail is handed to Gary, who turns out not to exist — and he is
// new, so the reader is asked to be patient with a person who is not there.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office until Monday. Urgent emails go to Gary, who doesn't exist — please be patient, he's new.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", { mode: 0o644 });
