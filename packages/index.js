import * as p from '@clack/prompts';
import { setTimeout } from 'node:timers/promises';
import color from 'picocolors';
function onCancel() {
    p.cancel('Operation cancelled.');
    process.exit(0);
}
async function main() {
    console.clear();
    await setTimeout(1000);
    p.intro(`${color.bgCyan(color.black(' changesets '))}`);
}
main().catch(console.error);
