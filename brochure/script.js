$(document).ready(function () {
  let participants = [];
  const itemsPerPage = 10;
  let currentPage = 1;

  function renderPage(page) {
    let participantHTML = "";
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let pageData = participants.slice(start, end);

    $.each(pageData, function (key, value) {
      participantHTML += `
                <div class="col-md-6">
                    <div class="participant-card">
                        <img height="200px" width="100px" src="${value.image}" alt="Participant Image" class="participant-img">
                        <div class="participant-info">
                            <h5>Name: ${value.name}</h5>
                            <p>Contact: ${value.contact}</p>
                            <p>Profession: ${value.profession}</p>
                            <p>Address: ${value.address}</p>
                        </div>
                    </div>
                </div>`;
    });

    $("#participant-container").html(participantHTML);
  }

  function renderPagination(totalPages) {
    let paginationHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<li class="page-item ${
        i === currentPage ? "active" : ""
      }">
                                    <a class="page-link" href="#">${i}</a>
                               </li>`;
    }
    $("#pagination").html(paginationHTML);
  }

  $(document).on("click", ".page-link", function (e) {
    e.preventDefault();
    currentPage = parseInt($(this).text());
    renderPage(currentPage);
    renderPagination(Math.ceil(participants.length / itemsPerPage));
  });

  function showParticipantsInBrochureList(data) {
    participants = data;
    const totalPages = Math.ceil(participants.length / itemsPerPage);
    renderPage(currentPage);
    renderPagination(totalPages);
  }

  // Fetch data and initialize
  $.get("/participants.json", function (data) {
    showParticipantsInBrochureList(data);
    alert("Load was performed.");
  });
});
