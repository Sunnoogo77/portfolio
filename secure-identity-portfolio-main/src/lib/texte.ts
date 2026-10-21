/**
 * Decoupe un texte sur sa premiere phrase, pour n'en montrer que le debut et
 * replier le reste.
 *
 * Rien n'est reecrit ni resume : les deux morceaux remis bout a bout rendent
 * exactement la chaine d'origine. Si aucune coupure franche n'existe, ou si le
 * debut serait trop court pour tenir seul, le texte revient entier et le reste
 * est vide : l'appelant affiche alors tout, sans bouton.
 */
export function premierePhrase(texte: string): [string, string] {
  const coupure = texte.indexOf('. ');
  if (coupure < 20 || coupure + 2 >= texte.length) return [texte, ''];
  return [texte.slice(0, coupure + 1), texte.slice(coupure + 2)];
}
