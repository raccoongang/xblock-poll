            (function(global){
                var PollXBlockI18N = {
                  init: function() {

(function (globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function (n) {
    var v=(n > 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  
  /* gettext library */

  django.catalog = {
    "\n                        Questions must be similarly cared for. If a question's text is changed, any votes for that question will remain.\n                        If a question is deleted, any student who previously took the survey will be permitted to retake it, but will not\n                        lose course progress.\n                    ": "\n                       As perguntas devem ser igualmente cuidadas. Se o texto de uma pergunta for alterado, todos os votos para essa pergunta permanecer\u00e3o.\n                       Se uma pergunta for apagada, qualquer aluno que j\u00e1 fez a pesquisa ter\u00e1 permiss\u00e3o para refaz\u00ea-la, mas n\u00e3o\n                         perder\u00e1 o progresso do curso.\n                    ", 
    "\n                    %(link_start)sMarkdown Syntax%(link_end)s is supported.\n                ": "\n                    %(link_start)sSintaxe Markdown %(link_end)s \u00e9 suportada.\n                ", 
    "\n                    If you change an answer's text, all students who voted for that choice will have their votes updated to\n                    the new text. You'll want to avoid changing an answer from something like 'True' to 'False', accordingly.\n                    If you delete an answer, any votes for that answer will also be deleted. Students whose choices are deleted\n                    may vote again, but will not lose course progress.\n                ": "\n                    Se voc\u00ea alterar o texto de uma resposta, todos os alunos que votaram nessa op\u00e7\u00e3o ter\u00e3o seus votos atualizados para\n                    o novo texto. Voc\u00ea vai querer evitar alterar uma resposta de algo como \"Verdadeiro\" para \"Falso\", de acordo.\n                     Se voc\u00ea apagar uma resposta, todos os votos para essa resposta tamb\u00e9m ser\u00e3o exclu\u00eddos. Alunos cujas escolhas s\u00e3o eliminadas\n                    podem votar novamente, mas n\u00e3o perder\u00e3o o progresso do curso.\n                ", 
    "\n                    Maximum number of times a user may submit a poll. %(bold_start)sSetting this to a value other than 1 will imply that\n                    'Private Results' should be true.%(bold_end)s Setting it to 0 will allow infinite resubmissions.\n                ": "\n                    N\u00famero m\u00e1ximo de vezes que um usu\u00e1rio pode enviar uma enquete. %(bold_start)sDefinir isso para um valor diferente de 1 implicar\u00e1 que\n                    'Resultados privados' devem ser verdadeiros.%(bold_end)s Definir como 0 permitir\u00e1 reenvios infinitos.\n                ", 
    "\n                    This text will be displayed for the user as some extra feedback after they have\n                    submitted their response to the poll.\n                ": "\n                    Este texto ser\u00e1 exibido para os usu\u00e1rios como um feedback extra ap\u00f3s eles terem\nenviado suas respostas para a enquete.\n                ", 
    "\n                %(link_start)sMarkdown Syntax%(link_end)s is supported.\n            ": "\n                %(link_start)sSintaxe Markdown %(link_end)s \u00e9 suportada.\n            ", 
    "\n                You have used %(submissions_count_s)s out of %(max_submissions_s)s submissions.\n            ": "\n                Voc\u00ea usou %(submissions_count_s)s de %(max_submissions_s)s envios.\n            ", 
    "\n        You have used %(submissions_count_s)s out of %(max_submissions_s)s submissions.\n      ": "\n        Voc\u00ea usou %(submissions_count_s)s de %(max_submissions_s)s envios.\n      ", 
    "'{field}' is not present, or not a JSON array.": "'{field}' n\u00e3o est\u00e1 presente ou n\u00e3o \u00e9 uma matriz JSON.", 
    "Add Answer": "Adicionar Resposta", 
    "Add Question": "Adicionar Pergunta", 
    "All images must have an alternative text describing the image in a way that would allow someone to answer the poll if the image did not load.": "Todas as imagens devem ter um texto alternativo descrevendo a imagem para permitir que usu\u00e1rios possam responder \u00e0 enquete caso a imagem n\u00e3o carregue.", 
    "Answer": "Resposta", 
    "Answer choices for this Survey": "Op\u00e7\u00f5es de respostas para esta pesquisa", 
    "Answer not included with request.": "A resposta n\u00e3o est\u00e1 inclu\u00edda na solicita\u00e7\u00e3o.", 
    "Are you enjoying the course?": "Voc\u00ea est\u00e1 gostando do curso?", 
    "Blue": "Azul", 
    "Cancel": "Cancelar", 
    "Display Name": "Nome de exibi\u00e7\u00e3o", 
    "Do you think you will learn a lot?": "Voc\u00ea acha que vai aprender bastante?", 
    "Download CSV": "Baixar CSV", 
    "Enter the prompt for the user.": "Entre o prompt para o usu\u00e1rio", 
    "Export results to CSV": "Exportar os resultados no formato CSV", 
    "False": "Falso", 
    "Feedback": "Coment\u00e1rio", 
    "Found unknown answer '{answer_key}' for question key '{question_key}'": " Resposta desconhecida encontrada '{answer_key}' para a pergunta '{question_key}'", 
    "Green": "Verde", 
    "If this is set to True, don't display results of the poll to the user.": "Se isso estiver definido como Verdadeiro, n\u00e3o exiba os resultados da enquete para o usu\u00e1rio.", 
    "Maximum Submissions": "M\u00e1ximos de Envios", 
    "Maximum Submissions missing or not an integer.": "N\u00famero m\u00e1ximo de votos omissos ou n\u00e3o que n\u00e3o s\u00e3o um n\u00famero inteiro.", 
    "Maybe": "Talvez", 
    "No": "N\u00e3o", 
    "No key \"{choice}\" in answers table.": "N\u00e3o h\u00e1 \"{choice}\" na tabela de resposta.", 
    "Not all questions were included, or unknown questions were included. Try refreshing and trying again.": "Nem todas as perguntas foram inclu\u00eddas ou h\u00e1 perguntas desconhecidas. \nAtualize a p\u00e1gina e tente novamente. ", 
    "Notes:": "Anota\u00e7\u00f5es:", 
    "Number of times the user has sent a submission.": "N\u00famero de vezes que o usu\u00e1rio votou.", 
    "Other": "Outra", 
    "Poll": "Enquete", 
    "Private Results": "Resultados Privados", 
    "Private results may not be False when Maximum Submissions is not 1.": "Resultados privados n\u00e3o podem ser Falso quando o n\u00famero m\u00e1ximo de envios for diferente de 1. ", 
    "Question": "Pergunta", 
    "Question/Prompt": "Quest\u00e3o/Prompt", 
    "Questions for this Survey": "Perguntas para esta pesquisa", 
    "Red": "Vermelho",
      "Results": "Resultados",
    "Results gathered from {total} respondent.": [
      "Resultados recolhidos de {total} respondente.",
      "Resultados recolhidos de {total} respondentes."
    ],
    "Save": "Salvar", 
    "Student data and results CSV available for download in the LMS.": "Dados do aluno e resultados no formato CSV dispon\u00edveis para download no LMS.", 
    "Submit": "Enviar", 
    "Survey": "Pesquisa", 
    "Text to display after the user votes.": "Texto a ser exibido ap\u00f3s o voto do usu\u00e1rio.", 
    "Thank you.": "Obrigado.", 
    "The answer options on this poll.": "As op\u00e7\u00f5es de respostas para esta enquete.", 
    "The maximum number of times a user may send a submission.": "O n\u00famero m\u00e1ximo de vezes que um usu\u00e1rio poder\u00e1 votar.", 
    "The student's answer": "A resposta do aluno", 
    "The user's answers": "As respostas do usu\u00e1rio", 
    "Total tally of answers from students.": "Contagem do total das respostas dos alunos.", 
    "True": "Verdadeiro", 
    "View results": "Ver os resultados", 
    "What is your favorite color?": "Qual \u00e9 a sua cor preferida?", 
    "Whether or not to display results to the user.": "Exibir ou n\u00e3o os resultados para o usu\u00e1rio.", 
    "Would you recommend this course to your friends?": "Voc\u00ea recomendaria este curso aos seus amigos?", 
    "Yes": "Sim", 
    "You have already voted as many times as you are allowed.": "Voc\u00ea j\u00e1 votou a quantidade de vezes permitida.", 
    "You have already voted in this poll.": "Voc\u00ea j\u00e1 votou nesta enquete.", 
    "You must include at least one {noun_lower}.": "Voc\u00ea deve incluir ao menos um {noun_lower}.", 
    "You must specify a question.": "Voc\u00ea deve especificar uma pergunta.", 
    "{noun} has no text or img. Please make sure all {noun_lower}s have one or the other, or both.": "{noun} n\u00e3o possui texto ou imagem. Por favor, certifique-se de que todas as {noun_lower} tenham um ou o outro, ou ambos.", 
    "{noun} was added with no label. All {noun_lower}s must have labels. Please check the form. Check the form and explicitly delete {noun_lower}s if not needed.": "{noun} foi adicionado sem etiqueta. Todos os {noun_lower}s devem ter etiquetas. Por favor, verifique o formul\u00e1rio. Verifique o formul\u00e1rio e apague {noun_lower}s caso n\u00e3o sejam necess\u00e1rios.", 
    "{noun} {item} contains no key.": "{noun} {item} n\u00e3o cont\u00e9m chave.", 
    "{noun} {item} not a javascript object!": "{noun} {item} n\u00e3o \u00e9 um objeto javascript!"
  };

  django.gettext = function (msgid) {
    var value = django.catalog[msgid];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return (typeof(value) == 'string') ? value : value[0];
    }
  };

  django.ngettext = function (singular, plural, count) {
    var value = django.catalog[singular];
    if (typeof(value) == 'undefined') {
      return (count == 1) ? singular : plural;
    } else {
      return value[django.pluralidx(count)];
    }
  };

  django.gettext_noop = function (msgid) { return msgid; };

  django.pgettext = function (context, msgid) {
    var value = django.gettext(context + '\x04' + msgid);
    if (value.indexOf('\x04') != -1) {
      value = msgid;
    }
    return value;
  };

  django.npgettext = function (context, singular, plural, count) {
    var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
    if (value.indexOf('\x04') != -1) {
      value = django.ngettext(singular, plural, count);
    }
    return value;
  };
  

  django.interpolate = function (fmt, obj, named) {
    if (named) {
      return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
    } else {
      return fmt.replace(/%s/g, function(match){return String(obj.shift())});
    }
  };


  /* formatting library */

  django.formats = {
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \u00e0\\s H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%d/%m/%y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M", 
      "%d/%m/%y"
    ], 
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%d/%m/%Y", 
      "%d/%m/%y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j \\d\\e F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i", 
    "SHORT_DATE_FORMAT": "d/m/Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
  };

  django.get_format = function (format_type) {
    var value = django.formats[format_type];
    if (typeof(value) == 'undefined') {
      return format_type;
    } else {
      return value;
    }
  };

  /* add to global namespace */
  globals.pluralidx = django.pluralidx;
  globals.gettext = django.gettext;
  globals.ngettext = django.ngettext;
  globals.gettext_noop = django.gettext_noop;
  globals.pgettext = django.pgettext;
  globals.npgettext = django.npgettext;
  globals.interpolate = django.interpolate;
  globals.get_format = django.get_format;

}(this));

                  }
                };
                PollXBlockI18N.init();
                global.PollXBlockI18N = PollXBlockI18N;
            }(this));