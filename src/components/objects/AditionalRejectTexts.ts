export interface AditionalText {
  name: string
  text: string
}

type AdTextList = Array<AditionalText>

const AditionalTexts: AdTextList = [
  {
    name: "Dependente inválido",
    text: "Obs: Para dependente declarado inválido, é necessário que se apresente laudo/atestado médico como comprovação;",
  },
  {
    name: "Número do Suporte",
    text: "Número do suporte: +55 (11) 3181-6105, por ligação ou WhatsApp\nHorários: 08:00 às 17:00, segunda a sexta, exceto feriado e fim de semana;",
  },
  {
    name: "Comprovante sem data",
    text: "Obs: Comprovante enviado não possui data de emissão. Favor, enviar outro comprovante dentro do prazo acima;",
  },
  {
    name: "Comprovante em outro nome",
    text: "Obs: Envie qualquer conta que esteja em seu nome OU em nome do pai/mãe/conjuge;",
  },
  {
    name: "Comprovante desatualizado",
    text: "Obs: Comprovante enviado foi emitido em MES. Favor, enviar um comprovante dentro do prazo acima;",
  },
  {
    name: "CPF dependente",
    text: "Obs: Enviar qualquer documento contendo o número do CPF do dependente;",
  },
  {
    name: "Identidade incompleta",
    text: "Obs: Enviar identidade frente e verso;",
  },
  {
    name: "CNH Incompleta",
    text: "Obs: Enviar CNH completa (partes superior e inferior);",
  },
  {
    name: "Identidade ilegível",
    text: "Obs: Documento de identidade enviado está ilegível. Favor, enviar outra foto em melhor qualidade;",
  },
]

export default AditionalTexts
